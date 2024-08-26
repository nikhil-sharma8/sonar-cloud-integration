import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Endpoint from "../../utils/BaseInstance";
import { Button } from "../../components/atoms/BasicButtons";
import { Text } from "../../utils/constants/TextConstants";
import TextField from "../../components/atoms/TextFields";
import { Label } from "../../utils/constants/LabelConstants";

export const CreateData: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await Endpoint.get("/persons");
      const persons = response.data;
      const highestId = persons.reduce(
        (maxId: number, person: { id: number }) => Math.max(person.id, maxId),
        0
      );
      const newId = highestId + 1;

      await Endpoint.post("/persons", {
        id: newId,
        name,
        email,
        phone,
      });
      navigate("/persons");
    } catch (error) {
      console.error("Error creating person:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Create New Person</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label={Label.Name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label={Label.Email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label={Label.Phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit" text={Text.Submit}></Button>
      </form>
    </div>
  );
};
