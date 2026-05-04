import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { useParams, Link } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { IoChevronBackCircleSharp } from "react-icons/io5";

import Spinner from "../components/layout/Spinner";

const User = () => {
  const params = useParams();
  const { getUser, user, loading } = useContext(UserContext);
  useEffect(() => {
    getUser(params.id);
  }, []);

  const { name, email, avatar, bio, status, profile } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            <IoChevronBackCircleSharp />
            Revenir à la recherche
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar} alt="" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-0">{name}</h2>
              <p className="flex-grow-0">{email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="mb-6">
          <h1 className="text-3xl card-title">
            {name}
            <div className="ml-2 mr-1 badge badge-success">{status}</div>
            <div className="mx-1 badge badge-info">{profile}</div>
          </h1>
          <p className="bio">{bio}</p>
          <div className="mt-4 card-actions">
            <a
              target="_blank"
              href={`mailto:${email}`}
              rel="noreferrer"
              className="btn btn-outline"
            >
              <div className="tooltip">
                <div className="tooltip-content">
                  <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
                    Wow!
                  </div>
                </div>
                <button className="btn">Contactez-moi par E-MAIL</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
