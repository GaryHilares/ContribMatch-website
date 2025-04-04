import { Link } from "react-router-dom";
export const Footer = () => {
    return (
      <footer className="flex items-start gap-4 flex-wrap bg-white pt-6 pb-40 px-6 border-t border-solid max-sm:pt-4 max-sm:pb-20 max-sm:px-4">
        <div className="flex w-[262px] flex-col items-start gap-6 max-sm:w-full">
          <div className="flex justify-center items-center">
            <div className="mr-4">
              <svg
                width="28"
                height="39"
                viewBox="0 0 28 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6667 1.75757H7.83333C6.28624 1.75757 4.80251 2.37215 3.70854 3.46611C2.61458 4.56007 2 6.04381 2 7.5909C2 9.138 2.61458 10.6217 3.70854 11.7157C4.80251 12.8097 6.28624 13.4242 7.83333 13.4242M13.6667 1.75757V13.4242M13.6667 1.75757H19.5C20.266 1.75757 21.0246 1.90845 21.7323 2.2016C22.4401 2.49476 23.0831 2.92444 23.6248 3.46611C24.1665 4.00779 24.5961 4.65085 24.8893 5.35858C25.1824 6.06631 25.3333 6.82486 25.3333 7.5909C25.3333 8.35695 25.1824 9.11549 24.8893 9.82322C24.5961 10.531 24.1665 11.174 23.6248 11.7157C23.0831 12.2574 22.4401 12.687 21.7323 12.9802C21.0246 13.2734 20.266 13.4242 19.5 13.4242M13.6667 13.4242H7.83333M13.6667 13.4242H19.5M13.6667 13.4242V25.0909M7.83333 13.4242C6.28624 13.4242 4.80251 14.0388 3.70854 15.1328C2.61458 16.2267 2 17.7105 2 19.2576C2 20.8047 2.61458 22.2884 3.70854 23.3824C4.80251 24.4763 6.28624 25.0909 7.83333 25.0909M19.5 13.4242C18.734 13.4242 17.9754 13.5751 17.2677 13.8683C16.5599 14.1614 15.9169 14.5911 15.3752 15.1328C14.8335 15.6745 14.4039 16.3175 14.1107 17.0252C13.8175 17.733 13.6667 18.4915 13.6667 19.2576C13.6667 20.0236 13.8175 20.7822 14.1107 21.4899C14.4039 22.1976 14.8335 22.8407 15.3752 23.3824C15.9169 23.924 16.5599 24.3537 17.2677 24.6469C17.9754 24.94 18.734 25.0909 19.5 25.0909C20.266 25.0909 21.0246 24.94 21.7323 24.6469C22.4401 24.3537 23.0831 23.924 23.6248 23.3824C24.1665 22.8407 24.5961 22.1976 24.8893 21.4899C25.1824 20.7822 25.3333 20.0236 25.3333 19.2576C25.3333 18.4915 25.1824 17.733 24.8893 17.0252C24.5961 16.3175 24.1665 15.6745 23.6248 15.1328C23.0831 14.5911 22.4401 14.1614 21.7323 13.8683C21.0246 13.5751 20.266 13.4242 19.5 13.4242ZM7.83333 25.0909C6.28624 25.0909 4.80251 25.7055 3.70854 26.7994C2.61458 27.8934 2 29.3771 2 30.9242C2 32.4713 2.61458 33.9551 3.70854 35.049C4.80251 36.143 6.28624 36.7576 7.83333 36.7576C9.38043 36.7576 10.8642 36.143 11.9581 35.049C13.0521 33.9551 13.6667 32.4713 13.6667 30.9242V25.0909M7.83333 25.0909H13.6667"
                  stroke="#1E1E1E"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.98 2.92057C16.184 2.92057 16.564 2.93257 17.83 2.99057C21.082 3.13857 22.601 4.68157 22.749 7.90957C22.807 9.17457 22.818 9.55457 22.818 12.7586C22.818 15.9636 22.806 16.3426 22.749 17.6076C22.6 20.8326 21.085 22.3786 17.83 22.5266C16.564 22.5846 16.186 22.5966 12.98 22.5966C9.77598 22.5966 9.39598 22.5846 8.13098 22.5266C4.87098 22.3776 3.35998 20.8276 3.21198 17.6066C3.15398 16.3416 3.14198 15.9626 3.14198 12.7576C3.14198 9.55357 3.15498 9.17457 3.21198 7.90857C3.36098 4.68157 4.87598 3.13757 8.13098 2.98957C9.39698 2.93257 9.77598 2.92057 12.98 2.92057Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.595 3.94157C16.991 3.69557 8.96398 3.69657 5.36498 3.94157C1.46798 4.20757 1.00898 6.56157 0.97998 12.7576C1.00898 18.9426 1.46398 21.3066 5.36498 21.5736C8.96498 21.8186 16.991 21.8196 20.595 21.5736C24.492 21.3076 24.951 18.9536 24.98 12.7576C24.951 6.57257 24.496 4.20857 20.595 3.94157ZM9.97998 16.7576V8.75757L17.98 12.7506L9.97998 16.7576Z"
                    fill="#1E1E1E"
                  />
           </svg>
           </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.98 0.757568H5.97998C3.21898 0.757568 0.97998 2.99657 0.97998 5.75757V19.7576C0.97998 22.5186 3.21898 24.7576 5.97998 24.7576H19.98C22.742 24.7576 24.98 22.5186 24.98 19.7576V5.75757C24.98 2.99657 22.742 0.757568 19.98 0.757568Z"
                  fill="#1E1E1E"
                />
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