import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Endpoint from "../../utils/BaseInstance";
import "./index.css";

interface IPerson {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UpdateData: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [person, setPerson] = useState<IPerson | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await Endpoint.get<IPerson>(`/persons/${id}`);
        setPerson(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.error("Error fetching person:", error);
      }
    };

    fetchPerson();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await Endpoint.put(`/persons/${id}`, {
        id,
        name,
        email,
        phone,
      });
      navigate("/persons");
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
      <h1>Update Person</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateData;
