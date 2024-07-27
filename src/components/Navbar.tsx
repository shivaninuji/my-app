"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { AlignRight } from "lucide-react";
import { BsFolder2Open, BsPeople, BsPerson } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed top-0 right-0 z-50">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-bl-2xl text-indigo-50 bg-primary md:hover:bg-[#202020] transition-colors"
        >
          <motion.span variants={iconVariants}>
            <AlignRight className="w-8 h-8" />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-100%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-[#202020] shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <Option setOpen={setOpen} Icon={BiHome} text="Home" />
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            <Option setOpen={setOpen} Icon={BsPerson} text="About" />
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            <Option setOpen={setOpen} Icon={BsFolder2Open} text="Projects" />
          </a>
          <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
            <Option setOpen={setOpen} Icon={BsPeople} text="Experience" />
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            <Option
              setOpen={setOpen}
              Icon={RiContactsBookLine}
              text="Contact"
            />
          </a>
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-sm font-semibold tracking-wide whitespace-nowrap rounded-md text-white hover:text-white hover:bg-primary transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default Navbar;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
