import { BsTelephone } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="pb-5">
      <svg
        viewBox="0 0 1440 79"
        className="bg-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
      </svg>
      <div className="pl-5">
        <ul className="text-white flex flex-col gap-2 text-xl">
          <li className="flex gap-2 items-center">
            <MdMail />{" "}
            <a href="mailto:satpekovrasul@gmail.com" className="text-lg">
              satpekovrasul@gmail.com
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <BsTelephone />{" "}
            <a href="tel:+77089232710" className="text-lg">
              +7(708)923-27-10
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <LiaLinkedin />{" "}
            <a
              className="text-lg"
              href="https://www.linkedin.com/in/%D1%80%D0%B0%D1%81%D1%83%D0%BB-%D1%81%D0%B0%D1%82%D0%BF%D0%B5%D0%BA%D0%BE%D0%B2-b45a73304/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
