import { Link } from "react-router-dom";
import logo from '../../assets/contribmatch_logo.png';

export const Footer = () => {
    return (
      <footer className="flex items-start gap-4 flex-wrap bg-white pt-6 pb-40 px-6 border-t border-solid max-sm:pt-4 max-sm:pb-20 max-sm:px-4">
        <div className="flex w-[262px] flex-col items-start gap-6 max-sm:w-full">
          <div className="flex flex-col items-start justify-center items-center">
            <div className="mr-4">
              <img src={logo} alt="Logo" className="w-11 h-12 my-4"/>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2737 10.9211L23.2023 0.757568H21.0872L13.3313 9.58062L7.14125 0.757568H0L9.3626 14.1008L0 24.7576H2.11504L10.3002 15.4381L16.8388 24.7576H23.98M2.8784 2.31947H6.12769L21.0856 23.2724H17.8355"
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_33_146)">
                    <path d="M12.98 2.92057C16.184 2.92057 16.564 2.93257 17.83 2.99057C21.082 3.13857 22.601 4.68157 22.749 7.90957C22.807 9.17457 22.818 9.55457 22.818 12.7586C22.818 15.9636 22.806 16.3426 22.749 17.6076C22.6 20.8326 21.085 22.3786 17.83 22.5266C16.564 22.5846 16.186 22.5966 12.98 22.5966C9.77602 22.5966 9.39602 22.5846 8.13102 22.5266C4.87102 22.3776 3.36002 20.8276 3.21202 17.6066C3.15402 16.3416 3.14202 15.9626 3.14202 12.7576C3.14202 9.55357 3.15502 9.17457 3.21202 7.90857C3.36102 4.68157 4.87602 3.13757 8.13102 2.98957C9.39702 2.93257 9.77602 2.92057 12.98 2.92057ZM12.98 0.757568C9.72102 0.757568 9.31302 0.771568 8.03302 0.829568C3.67502 1.02957 1.25302 3.44757 1.05302 7.80957C0.994019 9.09057 0.980019 9.49857 0.980019 12.7576C0.980019 16.0166 0.994019 16.4256 1.05202 17.7056C1.25202 22.0636 3.67002 24.4856 8.03202 24.6856C9.31302 24.7436 9.72102 24.7576 12.98 24.7576C16.239 24.7576 16.648 24.7436 17.928 24.6856C22.282 24.4856 24.71 22.0676 24.907 17.7056C24.966 16.4256 24.98 16.0166 24.98 12.7576C24.98 9.49857 24.966 9.09057 24.908 7.81057C24.712 3.45657 22.291 1.03057 17.929 0.830568C16.648 0.771568 16.239 0.757568 12.98 0.757568ZM12.98 6.59557C9.57702 6.59557 6.81802 9.35457 6.81802 12.7576C6.81802 16.1606 9.57702 18.9206 12.98 18.9206C16.383 18.9206 19.142 16.1616 19.142 12.7576C19.142 9.35457 16.383 6.59557 12.98 6.59557ZM12.98 16.7576C10.771 16.7576 8.98002 14.9676 8.98002 12.7576C8.98002 10.5486 10.771 8.75757 12.98 8.75757C15.189 8.75757 16.98 10.5486 16.98 12.7576C16.98 14.9676 15.189 16.7576 12.98 16.7576ZM19.386 4.91257C18.59 4.91257 17.945 5.55757 17.945 6.35257C17.945 7.14757 18.59 7.79257 19.386 7.79257C20.181 7.79257 20.825 7.14757 20.825 6.35257C20.825 5.55757 20.181 4.91257 19.386 4.91257Z" fill="#1E1E1E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_33_146">
                    <rect width="24" height="24" fill="white" transform="translate(0.980019 0.757568)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  width="25" 
                  height="19" 
                  viewBox="0 0 25 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M20.595 0.941449C16.991 0.695449 8.96401 0.696449 5.36501 0.941449C1.46801 1.20745 1.00901 3.56145 0.980011 9.75745C1.00901 15.9424 1.46401 18.3064 5.36501 18.5735C8.96501 18.8185 16.991 18.8195 20.595 18.5735C24.492 18.3074 24.951 15.9534 24.98 9.75745C24.951 3.57245 24.496 1.20845 20.595 0.941449ZM9.98001 13.7574V5.75745L17.98 9.75045L9.98001 13.7574Z" 
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.98 0.757568H5.98001C3.21901 0.757568 0.980011 2.99657 0.980011 5.75757V19.7576C0.980011 22.5186 3.21901 24.7576 5.98001 24.7576H19.98C22.742 24.7576 24.98 22.5186 24.98 19.7576V5.75757C24.98 2.99657 22.742 0.757568 19.98 0.757568ZM8.98001 19.7576H5.98001V8.75757H8.98001V19.7576ZM7.48001 7.48957C6.51401 7.48957 5.73001 6.69957 5.73001 5.72557C5.73001 4.75157 6.51401 3.96157 7.48001 3.96157C8.44601 3.96157 9.23001 4.75157 9.23001 5.72557C9.23001 6.69957 8.44701 7.48957 7.48001 7.48957ZM20.98 19.7576H17.98V14.1536C17.98 10.7856 13.98 11.0406 13.98 14.1536V19.7576H10.98V8.75757H13.98V10.5226C15.376 7.93657 20.98 7.74557 20.98 12.9986V19.7576Z" fill="#1E1E1E"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      <div className="flex gap-4 flex-wrap">
        <div className="flex w-[262px] flex-col items-start gap-3 max-sm:w-full">
          <h2 className="text-[#1e1e1e] text-base font-bold leading-[22.4px] mb-4">
            Use cases
          </h2>
          <Link
            to="/ui-design"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            UI design
          </Link>
          <Link
            to="/ux-design"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            UX design
          </Link>
          <Link
            to="/wireframing"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Wireframing
          </Link>
          <Link
            to="/diagramming"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Diagramming
          </Link>
          <Link
            to="/brainstorming"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Brainstorming
          </Link>
          <Link
            to="/whiteboard"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Online whiteboard
          </Link>
          <Link
            to="/collaboration"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Team collaboration
          </Link>
        </div>
        <div className="flex w-[262px] flex-col items-start gap-3 max-sm:w-full">
          <h2 className="text-[#1e1e1e] text-base font-bold leading-[22.4px] mb-4">
            Explore
          </h2>
          <Link
            to="/design"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Design
          </Link>
          <Link
            to="/prototyping"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Prototyping
          </Link>
          <Link
            to="/development"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Development features
          </Link>
          <Link
            to="/design-systems"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Design systems
          </Link>
          <Link
            to="/collaboration-features"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Collaboration features
          </Link>
          <Link
            to="/design-process"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Design process
          </Link>
          <Link
            to="/figjam"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            FigJam
          </Link>
        </div>
        <div className="flex w-[262px] flex-col items-start gap-3 max-sm:w-full">
          <h2 className="text-[#1e1e1e] text-base font-bold leading-[22.4px] mb-4">
            Resources
          </h2>
          <Link
            to="/blog"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="/best-practices"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Best practices
          </Link>
          <Link
            to="/colors"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Colors
          </Link>
          <Link
            to="/color-wheel"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Color wheel
          </Link>
          <Link
            to="/support"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Support
          </Link>
          <Link
            to="/developers"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Developers
          </Link>
          <Link
            to="/resource-library"
            className="text-[#1e1e1e] text-base leading-[22.4px] cursor-pointer"
          >
            Resource library
          </Link>
        </div>
      </div>
    </footer>
  );
};