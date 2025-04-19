import React, { useEffect, useState, useRef } from 'react';
import { Settings2Icon, PaletteIcon, LogOutIcon, MailIcon, ChevronUpIcon, UserIcon, GlobeIcon, KeyboardIcon, ShieldIcon, PaletteIcon as ThemeIcon, HelpCircleIcon, DownloadIcon, ChevronRightIcon } from 'lucide-react';
export const UserProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const handleMenuItemClick = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };
  const handleMainButtonClick = (action: string) => {
    console.log(`Clicked: ${action}`);
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };
  return <div className="relative" ref={menuRef}>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full p-4 border-t border-[#444444] flex items-center gap-3 flex-shrink-0 hover:bg-card-bg transition-colors">
        <div className="w-8 h-8 rounded-full bg-[#555555] flex items-center justify-center font-medium text-sm">
          GS
        </div>
        <span className="font-medium flex-grow text-left">Guest Session</span>
        <ChevronUpIcon size={16} className={`text-gray-custom transition-transform duration-200 ${isMenuOpen ? 'rotate-0' : 'rotate-180'}`} />
      </button>
      {isMenuOpen && <div className="absolute bottom-full left-0 w-full bg-card-bg border border-[#444444] rounded-t-lg overflow-hidden z-50">
          <div className="relative">
            <button onClick={() => handleMenuItemClick('settings')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm justify-between">
              <div className="flex items-center gap-3">
                <Settings2Icon size={16} className="text-gray-custom" />
                <span>Settings</span>
              </div>
              <ChevronRightIcon size={14} className={`text-gray-custom transition-transform duration-200 ${activeSubmenu === 'settings' ? 'rotate-90' : ''}`} />
            </button>
            {activeSubmenu === 'settings' && <div className="absolute left-full top-0 w-48 bg-card-bg border border-[#444444] rounded-lg overflow-hidden shadow-lg">
                <button onClick={() => handleMainButtonClick('profile')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
                  <UserIcon size={16} className="text-gray-custom" />
                  <span>Profile Settings</span>
                </button>
                <button onClick={() => handleMainButtonClick('language')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
                  <GlobeIcon size={16} className="text-gray-custom" />
                  <span>Language Preferences</span>
                </button>
                <button onClick={() => handleMainButtonClick('keyboard')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
                  <KeyboardIcon size={16} className="text-gray-custom" />
                  <span>Keyboard Shortcuts</span>
                </button>
                <button onClick={() => handleMainButtonClick('privacy')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
                  <ShieldIcon size={16} className="text-gray-custom" />
                  <span>Privacy Settings</span>
                </button>
              </div>}
          </div>
          <div className="relative">
            <button onClick={() => handleMenuItemClick('appearance')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm justify-between">
              <div className="flex items-center gap-3">
                <PaletteIcon size={16} className="text-gray-custom" />
                <span>Appearance</span>
              </div>
              <ChevronRightIcon size={14} className={`text-gray-custom transition-transform duration-200 ${activeSubmenu === 'appearance' ? 'rotate-90' : ''}`} />
            </button>
            {activeSubmenu === 'appearance' && <div className="absolute left-full top-0 w-48 bg-card-bg border border-[#444444] rounded-lg overflow-hidden shadow-lg">
                <button onClick={() => handleMainButtonClick('theme')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
                  <ThemeIcon size={16} className="text-gray-custom" />
                  <span>Theme Options</span>
                </button>
              </div>}
          </div>
          <a href="mailto:notapharisee@ex314.ai" className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
            <MailIcon size={16} className="text-gray-custom" />
            <span>Contact</span>
          </a>
          <button onClick={() => handleMainButtonClick('help')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
            <HelpCircleIcon size={16} className="text-gray-custom" />
            <span>Help & Documentation</span>
          </button>
          <button onClick={() => handleMainButtonClick('export')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm">
            <DownloadIcon size={16} className="text-gray-custom" />
            <span>Export Chat History</span>
          </button>
          <button onClick={() => handleMainButtonClick('logout')} className="w-full p-3 flex items-center gap-3 hover:bg-input-bg transition-colors text-sm text-error border-t border-[#444444]">
            <LogOutIcon size={16} />
            <span>Log out</span>
          </button>
        </div>}
    </div>;
};