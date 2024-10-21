import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import MainNav from './MainNav'
import MenuIcon from '../../assets/menu-icon.svg'
import CloseIcon from '../../assets/close-icon.svg'
function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <header>
      <div className="mx-auto flex w-[min(1000px,90%)] py-8">
        <div>
          <div className="">
            <Link to="/benedict-port">
              <span className="text-lg font-bold text-text-primary">Benedict</span>
            </Link>
          </div>
        </div>
        <div className=" w-full sm:hidden">
          <div className="flex  justify-end   ">
            <button onClick={toggleDrawer} className="">
              <img src={MenuIcon} alt="Menu Icon" className="w-4" />
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              size={'85%'}
            >
              <div className=" h-full   bg-bg-secondary">
                <button className="m-4" onClick={toggleDrawer}>
                  <img src={CloseIcon} alt="" className="w-6" />
                </button>
                <div className="flex h-full flex-col items-center justify-center">
                  <nav className="-mt-20 flex flex-col items-center justify-center gap-4 bg-bg-secondary text-lg font-medium text-text-accent">
                    <MainNav />
                  </nav>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
        <div className="hidden w-full text-text-accent  sm:block">
          <nav className="flex  justify-end gap-8  ">
            <MainNav />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
