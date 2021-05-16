type IconProps = {
  className?: string;
};

const InstagramIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 512 512" className={className}>
    <path d="M261.04 512c-1.696 0-3.392 0-5.099-.008-40.132.098-77.214-.922-113.277-3.117-33.062-2.012-63.242-13.438-87.281-33.04-23.196-18.913-39.035-44.487-47.078-76.003-7-27.437-7.371-54.371-7.727-80.422C.32 300.72.055 278.57 0 256.047c.055-22.617.32-44.766.578-63.457.356-26.047.727-52.98 7.727-80.422 8.043-31.516 23.883-57.09 47.078-76.004 24.039-19.602 54.219-31.027 87.285-33.039C178.73.934 215.82-.09 256.039.008c40.145-.086 77.215.926 113.277 3.117 33.063 2.012 63.243 13.438 87.282 33.04 23.199 18.913 39.035 44.487 47.078 76.003 7 27.437 7.37 54.375 7.726 80.422.258 18.691.528 40.84.578 63.363v.094c-.05 22.523-.32 44.672-.578 63.363-.355 26.047-.722 52.98-7.726 80.422-8.043 31.516-23.88 57.09-47.078 76.004-24.04 19.602-54.22 31.027-87.282 33.039C334.781 510.977 299.305 512 261.04 512zm-5.099-40.008c39.48.094 75.73-.902 110.946-3.043 25-1.52 46.675-9.633 64.433-24.113 16.414-13.387 27.72-31.856 33.598-54.895 5.828-22.84 6.164-47.363 6.488-71.078.254-18.566.52-40.558.574-62.863-.054-22.309-.32-44.297-.574-62.863-.324-23.715-.66-48.239-6.488-71.082-5.879-23.04-17.184-41.508-33.598-54.895-17.758-14.476-39.433-22.59-64.433-24.11-35.215-2.144-71.465-3.132-110.852-3.046-39.473-.094-75.726.902-110.941 3.047-25 1.52-46.676 9.633-64.434 24.11-16.414 13.386-27.719 31.855-33.598 54.894-5.828 22.843-6.164 47.363-6.488 71.082-.254 18.582-.52 40.586-.574 62.91.055 22.226.32 44.234.574 62.816.324 23.715.66 48.239 6.488 71.078 5.88 23.04 17.184 41.508 33.598 54.895 17.758 14.476 39.434 22.59 64.434 24.11 35.215 2.144 71.476 3.144 110.847 3.046zM254.988 381c-68.922 0-125-56.074-125-125s56.078-125 125-125c68.926 0 125 56.074 125 125s-56.074 125-125 125zm0-210c-46.867 0-85 38.133-85 85s38.133 85 85 85c46.871 0 85-38.133 85-85s-38.129-85-85-85zm139-80c-16.566 0-30 13.43-30 30s13.434 30 30 30c16.57 0 30-13.43 30-30s-13.43-30-30-30z" />
  </svg>
);

export default InstagramIcon;