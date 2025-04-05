export default function Friend({ friend }) {
    const { name, email } = friend;
    return (
      <div>
        <h4 className="border-2 border-green-500 rounded-xl m-2.5 p-2.5">
                Name: {name}
                Email: {email}
        </h4>
      </div>
    );
}