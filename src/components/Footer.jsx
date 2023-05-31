import { A } from "@solidjs/router";
import "./footer.css"


export default function Footer(){
  const d = new Date;
  
  return(
    <footer class="footer">
      <div class="footer-links">
        <A href="">Social Media</A>
        <A href="">Terms & Conditions</A>
        <A href="">Careers</A>
        <A href="">FAQ</A>
      </div>
      <div>
        <p>Covenaunt is part of Dacres-Abatayo LLP.</p>
        <p>Copyright &copy; {d.getFullYear()}</p>
      </div>
    </footer>
  )
}