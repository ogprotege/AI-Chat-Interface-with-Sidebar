import React, { useState } from 'react';
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { UserProfile } from './UserProfile';
interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}
export const Sidebar = ({
  isCollapsed,
  onToggle
}: SidebarProps) => {
  const [showAllChats, setShowAllChats] = useState(false);
  const recentChats = ['Theological Discussion on Grace', 'Church Fathers Study', 'Vatican II Documents', 'Biblical Interpretation', 'Liturgical Questions'];
  const olderChats = ['Patristic Readings', 'Moral Theology', 'Catechism Review', 'Doctrinal Questions'];
  return <aside className={`${isCollapsed ? 'w-[60px]' : 'w-[260px]'} flex-shrink-0 bg-dark-bg flex flex-col border-r border-[#383838] transition-all duration-300`}>
      <div className="p-4 flex items-center gap-2 flex-shrink-0">
        {!isCollapsed ? <>
            <div className="w-6 h-6 bg-accent-purple rounded flex items-center justify-center">
              <img src="/jerusalem-cross.png" alt="Jerusalem Cross" className="w-4 h-4" />
            </div>
            <span className="text-base font-semibold">AI Assistant</span>
          </> : <img src="/chi-ro.png" alt="Chi-Rho" className="w-6 h-6" />}
        <button onClick={onToggle} className="ml-auto p-1 hover:bg-card-bg rounded-lg transition-colors">
          {isCollapsed ? <ChevronRightIcon size={20} /> : <ChevronLeftIcon size={20} />}
        </button>
      </div>
      {!isCollapsed && <>
          <button className="flex items-center gap-2 bg-accent-purple text-white py-2 px-3 mx-4 mb-4 rounded-md font-medium text-left transition-colors hover:bg-purple-hover">
            <PlusIcon size={16} />
            New Chat
          </button>
          <nav className="flex-grow overflow-y-auto px-2 pb-4">
            <SidebarSection title="Chat History" defaultOpen={true}>
              <ul>
                {recentChats.map((chat, index) => <li key={index}>
                    <a href="#" className="block p-2 mb-1 rounded text-sm truncate hover:bg-[#333333]">
                      {chat}
                    </a>
                  </li>)}
                {!showAllChats && <button onClick={() => setShowAllChats(true)} className="w-full p-2 text-sm text-gray-custom hover:bg-[#333333] rounded transition-colors text-left opacity-75">
                    Show more chats...
                  </button>}
                {showAllChats && olderChats.map((chat, index) => <li key={index}>
                      <a href="#" className="block p-2 mb-1 rounded text-sm truncate hover:bg-[#333333]">
                        {chat}
                      </a>
                    </li>)}
              </ul>
            </SidebarSection>
            <SidebarSection title="Archived" defaultOpen={false}>
              <ul>
                <li>
                  <a href="#" className="block p-2 mb-1 rounded text-sm truncate hover:bg-[#333333]">
                    Early Church History
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 mb-1 rounded text-sm truncate hover:bg-[#333333]">
                    Sacramental Theology
                  </a>
                </li>
              </ul>
            </SidebarSection>
          </nav>
          <UserProfile />
        </>}
    </aside>;
};