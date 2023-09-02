import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import jwtDecode from 'jwt-decode';
import { getAppointmentApplication,getOrganizationAppointment,updateAppointment,resetAppointment } from '../../features/appointment/appointSlice';
import { getUserMeOrganization } from '../../features/auth/authSlice';
import Footer from '../Footer';
import {VscDiffAdded} from 'react-icons/vsc'
function AppointmentView() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const appointmentApplications = useSelector((state) => state.appointments.appointmentApplications)
    const organizationAppointments= useSelector((state) => state.appointments.organizationAppointments)
    const userOrganization = useSelector((state) => state.auths.userOrganization)
    console.log("@%%%%%%%%%%%%%%%%%%%%%%%%",organizationAppointments)
    const userName = userOrganization.first_name
    const fullName = userOrganization.first_name + " " + userOrganization.last_name;
    const email = userOrganization.email
    const profilePic= userOrganization.profile ? userOrganization.profile.image : 'https://res.cloudinary.com/basha18/image/upload/v1693311937/userprofile-removebg-preview_qfq3eh.png'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    if (organizationAppointments) {
      const filteredUsers = organizationAppointments.filter(user => user.user.email === email);
      console.log("Doooooooooooo",filteredUsers);
    } else {
      console.log("userOrganization is null or empty");
    }
    useEffect(() => {
      dispatch(getAppointmentApplication());
      dispatch(getOrganizationAppointment());
      }, [dispatch]);

  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  if (!userData || !userData.token) {
    throw new Error("Token not found in userData");
  }

  const token = userData.token;

  const tokenPayload = jwtDecode(token);

  const user_id = tokenPayload.user_id;
  console.log("$$$$$$$$$$$$",user_id)
  const filteredAppointments = appointmentApplications.filter(appointment => appointment.user === user_id);
  const filteredOrganizationAppointments = organizationAppointments.filter(user => user.user.email === email);
  console.log("$$$$$$$$$$$$filteredAppointments",filteredAppointments)
  const openModal = (appointmentId, title, description) => {
    setSelectedAppointmentId(appointmentId);
    setNewTitle(title); // Set the initial value for newTitle
    setNewDescription(description); // Set the initial value for newDescription
    setIsModalOpen(true);
  };

  // Step 4: Create a function to handle the update status action
  const handleUpdateStatus = () => {
    console.log(`Updating appointment ${selectedAppointmentId} to status: ${newStatus}`);
    // Dispatch an action to update the appointment status in Redux state.
    const request = {
          apt_id:selectedAppointmentId,
          aptStatus: newStatus
    }
    // You need to implement the action creator for this.
    dispatch(updateAppointment(request))
    setIsModalOpen(false); // Close the modal
  };
  const statusOptions = ['confirmed', 'cancelled', 'pending'];

    return (
      <div>
        <div class="flex flex-row">
          <div class="bg-no-repeat border border-slate-300 rounded-xl w-7/12 mr-2 p-6">
            <p class="text-5xl text-indigo-900">Welcome <strong>{userName}</strong></p>
          </div>
          <div class="min-h-auto dark:bg-slate-800 gap-6 flex items-center justify-center">
          <div
            class="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
            <div class="flex items-center gap-4">
              <img src={profilePic}
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
              <div class="w-fit transition-all transform duration-500">
                <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                  {fullName}
                </h1>
                <p class="text-gray-400">Patient</p>
                <a
                  class="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                    {email}
                </a>
              </div>
            </div>
            <div class="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
              <div class="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                  <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
                <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg viewBox="0 0 960 1000" fill="currentColor" height="1em" width="1em">
                  <path
                    d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        </div>
      <h1 className="text-3xl text-center mt-8">Confirmed Appointments</h1>
        <div className="flex justify-center mt-4 mb-20">
          <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
            <table class="w-full table-fixed">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Doctor Name</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Medical Condition</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Symptoms</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Start</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">End</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Update</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                  {organizationAppointments.map(orgAppointment => (
                      <tr key={orgAppointment.id}>
                          <td className="py-4 px-6 border-b border-gray-200">{orgAppointment.doctor ? orgAppointment.doctor.first_name : 'No Doctor'}</td>
                          <td className="py-4 px-6 border-b border-gray-200">{orgAppointment.title}</td>
                          <td className="py-4 px-6 border-b border-gray-200 truncate">{orgAppointment.description}</td>
                          <td className="py-4 px-6 border-b border-gray-200">{orgAppointment.start_time}</td>
                          <td className="py-4 px-6 border-b border-gray-200">{orgAppointment.end_time}</td>
                          <td className="py-4 px-6 border-b border-gray-200">
                            <span className={`bg-${orgAppointment.status === 'pending' ? 'bg-green' : 'bg-red'}-500 text-black py-1 px-2 rounded-full text-xs`}>
                              {orgAppointment.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 border-b border-gray-200">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => openModal(orgAppointment.id)} // Step 2: Open the modal on button click
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Update Status Modal"
        // Step 1: Set Tailwind CSS classes to style the modal
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                    class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-full py-2 px-3 border rounded"
                          >
                            {statusOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button type="button"
                                onClick={handleUpdateStatus}
                                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Update
                            </button>
                        </span>
                        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                            <button type="button"
                                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </Modal>
      </div>
    );
  }
  export default AppointmentView;