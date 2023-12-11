import {
  React,
  useState,
  TrashIcon,
  PencilIcon,
} from "../Page/Partials/Imports";

const Table = ({ style, actions = false }) => {
  const initialData = [
    { id: 1, name: "John Doe", age: 25, ship: "yes", salary: "20k" },
    { id: 2, name: "Jane Doe", age: 30, ship: "no", salary: "45k" },
  ];

  const [tableData, setTableData] = useState(initialData);
  const [newData, setNewData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [ship, setShip] = useState("");
  const [salary, setSalary] = useState("");

  const updateTableData = () => {
    if (!newData.name || !newData.age || !newData.ship || !newData.salary) {
      // Alert or handle the empty data case
      alert("Name Age Ship and Salaray are required.");
      return;
    }

    const maxId = Math.max(...tableData.map((row) => row.id), 0);
    const newId = maxId + 1;

    setTableData([...tableData, { ...newData, id: newId }]);
    setNewData({
      id: tableData.length + 1,
      name: "",
      age: "",
      ship: "",
      salary: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const deleteRow = (id) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
  };

  const startEdit = (id, name, age, ship, salary) => {
    setEditId(id);
    setEditName(name);
    setEditAge(age);
    setSalary(salary);
    setShip(ship);
  };

  const saveEdit = () => {
    const updatedData = tableData.map((row) =>
      row.id === editId
        ? { ...row, name: editName, age: editAge, ship: ship, salary: salary }
        : row
    );

    setTableData(updatedData);
    setEditId(null);
    setEditName("");
    setEditAge("");
    setShip("");
    setSalary("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
    setEditAge("");
    setShip("");
    setSalary("");
  };

  return (
    <section className="container mx-auto p-4">
    { actions &&  <article className="flex sm:flex-row flex-col h-auto w-auto justify-center items-center flex-wrap">
        <input
          className="border border-slate-400 rounded h-full py-2 px-2 sm:mb-0 mb-2"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
          value={newData.name}
        />
        <input
          className="border border-slate-400 rounded h-full px-2 py-2 mx-2 sm:mb-0 mb-2"
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleInputChange}
          value={newData.age}
        />
        <input
          className="border border-slate-400 rounded h-full px-2 py-2 mx-2 sm:mb-0 mb-2"
          type="text"
          placeholder="Relationship.."
          name="ship"
          onChange={handleInputChange}
          value={newData.ship}
        />
        <input
          className="border border-slate-400 rounded h-full px-2 py-2 mx-2"
          type="number"
          placeholder="Salary"
          name="salary"
          onChange={handleInputChange}
          value={newData.salary}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mt-2"
          onClick={updateTableData}
        >
          Add
        </button>
      </article>}
      <table className="mt-4 table-auto w-full">
        <thead className={`${style}`}>
          <tr>
            {Object.keys(initialData[0]).map((key) => (
              <th key={key} className="px-4 py-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
            {actions && <th className="px-4 py-2 flex">Actions</th>}
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className={`border px-4 py-2 ${style}`}>{row.id}</td>
              <td className={`border px-4 py-2 ${style}`}>
                {editId === row.id ? (
                  <input
                    className="w-28"
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td className={`border px-4 py-2 ${style}`}>
                {editId === row.id ? (
                  <input
                    className="w-10"
                    type="number"
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                  />
                ) : (
                  row.age
                )}
              </td>
              <td className={`border px-4 py-2 ${style}`}>
                {editId === row.id ? (
                  <input
                    className="w-10"
                    type="text"
                    value={ship}
                    onChange={(e) => setShip(e.target.value)}
                  />
                ) : (
                  row.ship
                )}
              </td>
              <td className={`border px-4 py-2 ${style}`}>
                {editId === row.id ? (
                  <input
                    className="w-16"
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                ) : (
                  row.salary
                )}
              </td>
              {actions && (
                <td className={`py-4 flex px-4 space-x-2 ${style}`}>
                  {editId === row.id ? (
                    <>
                      <button
                        className="text-green-500"
                        onClick={() => saveEdit()}
                      >
                        Save
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => cancelEdit()}
                      >
                        Undo
                      </button>
                    </>
                  ) : (
                    <>
                      <PencilIcon
                        style="text-blue-500"
                        onClick={() =>
                          startEdit(
                            row.id,
                            row.name,
                            row.age,
                            row.ship,
                            row.salary
                          )
                        }
                      />
                      <TrashIcon
                        style="text-red-500"
                        onClick={() => deleteRow(row.id)}
                      />
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
