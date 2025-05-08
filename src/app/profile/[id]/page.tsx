export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr className="text-black" />
      <p className="text-white text-4xl">
        Profile Page<span className="p-2 text-black bg-orange-300  ml-2 rounded">{params.id}</span>
      </p>
    </div>
  );
}
