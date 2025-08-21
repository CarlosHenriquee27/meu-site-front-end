import Image from "next/image";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <Image
          src="/me.jpg"
          alt="Minha foto"
          width={150}
          height={150}
          className="profile-image"
        />
      </div>
      <h2 className="profile-name">Carlos Henrique da Costa Souza</h2>
      <p className="profile-bio">
        Sou estudante de programação e estou desenvolvendo minhas habilidades em
        React e Next.js. Gosto de aprender novas tecnologias e aplicar em
        projetos práticos.
      </p>
    </div>
  );
}