import { useState } from "react";

export default function InputExample() {
  const [form, setForm] = useState({name:"",surname:""});
  

  const onChangeInput = (e) => {
    console.log(e.target)
    setForm({...form,[e.target.name]:e.target.value})
  }


  return (
    <div>
      Name
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      <br />
    Surname
    <br/>
    <input name="surname" value={form.surName} onChange={onChangeInput} />
    <br/>
    {form.name} {form.surname}
    </div>
  );
}
