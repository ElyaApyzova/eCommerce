import { Flex } from "antd";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Header = () => {
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        let ResponsiveMenu = () => {
            if (window.innerWidth < 667) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };
        ResponsiveMenu();
        window.addEventListener("resize", ResponsiveMenu);
    }, []);

    return (
        <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
        <Link to="/">
            <div>

            </div>
        </Link>
        </Flex>
        </nav>
        </div>
    )
}

export default Header