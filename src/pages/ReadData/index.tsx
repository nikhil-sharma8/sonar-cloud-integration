import { useEffect, useState } from "react";
import Endpoint from "../../utils/BaseInstance";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/BasicButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import { Text } from "../../utils/constants/TextConstants";
import { LogoutButton } from "../../components/atoms/Logout";

interface IPerson {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const ReadData: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Endpoint.get("/persons");
        setPersons(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await Endpoint.delete(`/persons/${id}`);
      setPersons(persons.filter((person) => person.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h1>Persons List</h1>
      <Button
        color="primary"
        onClick={() => navigate("/create")}
        text={Text.Add}
      ></Button>
      <LogoutButton />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>
                <Button
                  onClick={() => navigate(`/update/${person.id}`)}
                  text={Text.Edit}
                ></Button>
                <Button
                  onClick={() => handleDelete(person.id)}
                  text={Text.Delete}
                  startIcon={<DeleteIcon />}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
