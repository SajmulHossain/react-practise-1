export default function Card({name, age, id}) {
  return (
    <div className="p-10 border w-fit rounded-lg bg-black text-white border-red-600">
      <h3>Name : {name}</h3>
      <p>Age : {age}</p>
      <p>Class : {id}</p>
    </div>
  )
}