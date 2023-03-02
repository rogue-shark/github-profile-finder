import { FaGithubAlt } from "react-icons/fa"

function Footer() {
    const footerCurrYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-neutral shadow-md text-primary-content footer-center">
        <div>
        
        <p className="text-xl"><FaGithubAlt style={{display: 'inline'}}/> <a href="https://github.com/rogue-shark">RogueShark</a> &copy; {footerCurrYear} </p>
      </div>
    </footer>
  )
}

export default Footer