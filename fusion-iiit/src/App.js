import React, { useState } from "react";
import { FaUserCircle, FaChevronRight, FaBell, FaBullhorn, FaSignOutAlt, FaBars, FaEdit, FaEnvelope, FaPhone, FaArrowLeft, FaMoon, FaSun, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Component() {
  const [designation, setDesignation] = useState("Student");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [activeTab, setActiveTab] = useState("notifications");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAllModules, setShowAllModules] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, text: "System Update: The system will undergo maintenance at midnight.", read: false },
    { id: 2, text: "New Feature: A new feature has been added to your dashboard.", read: false },
    { id: 3, text: "Reminder: Don't forget to complete your profile setup", read: true },
  ]);

  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Campus-wide event next week", read: false },
    { id: 2, text: "New research opportunities available", read: false },
  ]);

  const modules = [
    { name: "Academics", icon: "🏛️" },
    { name: "Programme and Curriculum", icon: "📚" },
    { name: "Mess Management", icon: "🍽️" },
    { name: "Visitor's Hostel", icon: "🏨" },
    { name: "Healthcare Center", icon: "🏥" },
    { name: "Scholarship Portal", icon: "🎓" },
    { name: "Complaint System", icon: "📝" },
    { name: "Placement Cell", icon: "💼" },
    { name: "Department Portal", icon: "🏢" },
    { name: "Gymkhana", icon: "🏋️" },
    { name: "Hostel Management", icon: "🛏️" },
    { name: "Other Academic", icon: "📖" },
  ];

  const profileSections = [
    "Profile",
    "Skills Technologies",
    "Education Courses",
    "Work Experience",
    "Achievements",
  ];

  const toggleRead = (id, isNotification) => {
    if (isNotification) {
      setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n)));
    } else {
      setAnnouncements(announcements.map((a) => (a.id === id ? { ...a, read: !a.read } : a)));
    }
  };

  const unreadNotifications = notifications.filter((n) => !n.read).length;
  const unreadAnnouncements = announcements.filter((a) => !a.read).length;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleShowAllModules = () => {
    setShowAllModules(!showAllModules);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${sidebarOpen ? "" : "hidden"}`}>
            Fusion IIIT
          </h1>
          <button className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          </button>
        </div>
        <nav className="mt-4">
          {modules.map((module, index) => (
            <button key={index} className={`w-full text-left pl-4 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center`}>
              <span className="mr-2">{module.icon}</span>
              {sidebarOpen && <span>{module.name}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm p-4 flex justify-between items-center`}>
          <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {showProfile ? "Professional Profile" : "Dashboard"}
          </h1>
          <div className="flex items-center space-x-4">
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className={`border rounded-md p-2 w-40 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Staff">Staff</option>
            </select>
            <button className={`flex items-center border rounded-md px-3 py-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <FaUserCircle className="mr-2 h-4 w-4" /> UTKARSH UTKARSH
            </button>
            <button className="bg-red-500 text-white rounded-md p-2">
              <FaSignOutAlt className="h-4 w-4" />
            </button>
            <button onClick={toggleDarkMode} className={`p-2 rounded-md ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}>
              {isDarkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {showProfile ? (
            <div className="space-y-6">
              <button
                onClick={() => setShowProfile(false)}
                className={`flex items-center border rounded-md px-3 py-2 mb-4 ${isDarkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'}`}
              >
                <FaArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
              </button>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
                    <div className="flex flex-col items-center space-y-4">
                      <div className={`w-48 h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full flex items-center justify-center overflow-hidden`}>
                        <FaUserCircle className={`h-40 w-40 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                      <div className="text-center">
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          UTKARSH BARANWAL
                        </h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CSE - 22BCSD01</p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>B.Tech 2022 Sem - 5</p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{designation}</p>
                      </div>
                    </div>
                  </div>

                  {profileSections.map((section, index) => (
                    <button
                      key={index}
                      className={`w-full flex justify-between items-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'} rounded-lg shadow-md px-4 py-3`}
                    >
                      {section}
                      <FaChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </div>

                {/* Right Column */}
                <div className="md:col-span-2 space-y-4">
                  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
                    <div className={`p-4 flex items-center justify-between border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>About Me</h3>
                      <button className={`flex items-center border rounded-md px-2 py-1 text-sm ${isDarkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'}`}>
                        <FaEdit className="h-4 w-4 mr-2" /> Edit
                      </button>
                    </div>
                    <div className="p-4">
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>NA</p>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
                    <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Details</h3>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Date Of Birth
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Oct. 15, 2004</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Address
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>NA</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
                    <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact Details</h3>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex items-center">
                        <FaPhone className={`h-4 w-4 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mr-2`}>
                          Contact:
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>9999999999</span>
                      </div>
                      <div className="flex items-center">
                        <FaEnvelope className={`h-4 w-4 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mr-2`}>
                          Mail:
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          22bcsd01@iiitdmj.ac.in
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* User Card */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
                <div className="flex items-center space-x-6 p-6">
                  <div className={`w-32 h-32 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full flex items-center justify-center overflow-hidden`}>
                    <FaUserCircle className={`h-24 w-24 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      UTKARSH BARANWAL
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CSE - 22BCSD01</p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>B.Tech 2022 Sem - 5</p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{designation}</p>
                  </div>
                  <button
                    className={`ml-auto border rounded-md px-3 py-2 ${isDarkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'}`}
                    onClick={() => setShowProfile(true)}
                  >
                    View Professional Profile
                  </button>
                </div>
              </div>

              {/* Notifications and Announcements */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                <div className="flex">
                  <button
                    className={`flex-1 py-2 px-4 ${
                      activeTab === "notifications"
                        ? `font-bold ${isDarkMode ? 'border-b-2 border-blue-500' : 'border-b-2 border-blue-500'}`
                        : ''
                    } ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    Notifications
                    {unreadNotifications > 0 && (
                      <span className="ml-2 px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
                        {unreadNotifications}
                      </span>
                    )}
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 ${
                      activeTab === "announcements"
                        ? `font-bold ${isDarkMode ? 'border-b-2 border-blue-500' : 'border-b-2 border-blue-500'}`
                        : ''
                    } ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    onClick={() => setActiveTab("announcements")}
                  >
                    Announcements
                    {unreadAnnouncements > 0 && (
                      <span className="ml-2 px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
                        {unreadAnnouncements}
                      </span>
                    )}
                  </button>
                </div>
                <div className="p-4">
                  {activeTab === "notifications" ? (
                    <ul className="space-y-2">
                      {notifications.map((notification) => (
                        <li
                          key={notification.id}
                          className={`flex items-center justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} py-2 border-b last:border-b-0`}
                        >
                          <div className="flex items-center">
                            <FaBell className="mr-2 h-4 w-4 text-blue-500" />
                            <span>{notification.text}</span>
                          </div>
                          <button
                            className={`border rounded-md px-2 py-1 text-sm ${isDarkMode ? 'text-white border-gray-600 hover:bg-gray-700' : 'text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                            onClick={() => toggleRead(notification.id, true)}
                          >
                            {notification.read ? "Mark as Unread" : "Mark as Read"}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2">
                      {announcements.map((announcement) => (
                        <li
                          key={announcement.id}
                          className={`flex items-center justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} py-2 border-b last:border-b-0`}
                        >
                          <div className="flex items-center">
                            <FaBullhorn className="mr-2 h-4 w-4 text-blue-500" />
                            <span>{announcement.text}</span>
                          </div>
                          <button
                            className={`border rounded-md px-2 py-1 text-sm ${isDarkMode ? 'text-white border-gray-600 hover:bg-gray-700' : 'text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                            onClick={() => toggleRead(announcement.id, false)}
                          >
                            {announcement.read ? "Mark as Unread" : "Mark as Read"}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Module Tiles */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modules.slice(0, showAllModules ? modules.length : 6).map((module, index) => (
                    <div
                      key={index}
                      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between pb-2">
                          <h3 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
                            <span className="mr-2">{module.icon}</span>
                            {module.name}
                          </h3>
                          <FaChevronRight className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        </div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Click to access {module.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={toggleShowAllModules}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                      isDarkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                    } transition-colors duration-200`}
                  >
                    <span>{showAllModules ? "Show Less" : "Show More"}</span>
                    {showAllModules ? (
                      <FaChevronUp className="h-4 w-4" />
                    ) : (
                      <FaChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}