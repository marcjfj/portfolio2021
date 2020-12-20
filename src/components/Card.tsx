import { Icon } from '@iconify/react';
import logoLinkedIn from '@iconify-icons/carbon/logo-linkedin';
import mailAll from '@iconify-icons/carbon/send-filled';
import logoGithub from '@iconify-icons/carbon/logo-github';
function card() {
  return (
    <div className="card p-6 shadow-lg rounded-lg bg-white flex flex-col">
      <div className="watermark">
        <i></i>
        <i></i>
      </div>
      <h2 className="title text-brand-dark text-24 font-bold">
        Marc Farias Jones
      </h2>
      <p className="text-gray-mid">Full Stack Web Developer</p>
      <div className="contact mt-auto flex flex-col items-start relative">
        <a
          href="https://www.linkedin.com/in/marcjfj"
          className="text-gray-mid flex mb-3 group"
          rel="noreferrer"
          target="_blank"
        >
          <div className="icon-wrapper mr-2 w-7 h-7 rounded bg-brand-dark flex items-center justify-center">
            <Icon
              icon={logoLinkedIn}
              width="1.2rem"
              height="1.2rem"
              color="white"
            />
          </div>
          <span className="group-hover:underline group-hover:text-brand-dark">
            linkedin.com/in/marcjfj
          </span>
        </a>
        <a
          href="marc@fariasjones.com"
          rel="noreferrer"
          target="_blank"
          className="text-gray-mid flex mb-3 group"
        >
          <div className="icon-wrapper mr-2 w-7 h-7 rounded bg-brand-dark flex items-center justify-center">
            <Icon icon={mailAll} width="1.1rem" height="1.2rem" color="white" />
          </div>
          <span className="group-hover:underline group-hover:text-brand-dark">
            marc@fariasjones.com
          </span>
        </a>
        <a
          href="https://github.com/marcjfj"
          rel="noreferrer"
          target="_blank"
          className="text-gray-mid flex mb-3 group"
        >
          <div className="icon-wrapper mr-2 w-7 h-7 rounded bg-brand-dark flex items-center justify-center">
            <Icon
              icon={logoGithub}
              width="1.2rem"
              height="1.2rem"
              color="white"
            />
          </div>
          <span className="group-hover:underline group-hover:text-brand-dark">
            github.com/marcjfj
          </span>
        </a>
      </div>
    </div>
  );
}
export default card;
