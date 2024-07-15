import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Endpoint from "../../utils/BaseInstance";

const DeleteData: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const deletePerson = async () => {
      try {
        await Endpoint.delete(`/persons/${id}`);
        navigate("/persons");
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    };

    deletePerson();
  }, [id, navigate]);

  return <div>Deleting...</div>;
};

export default DeleteData;
