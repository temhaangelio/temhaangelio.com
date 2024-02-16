import Link from "next/link";

export default function Reklam() {
  return (
    <Link href="https://www.mydavet.com">
      <div className="flex flex-col md:flex-row gap-0 justify-between items-center md:items-end bg-gray-100 w-full border border-gray-200 rounded-xl my-10">
        <div className="flex flex-col gap-2 p-5 md:p-10">
          <div className="md:w-full border-b-2 border-gray-200 pb-5">
            <img
              className="w-48 md:w-48"
              src="/logo.png"
              alt="logo"
            />
          </div>
          <h1 className="text-indigo-900 text-3xl md:text-4xl font-bold">Davetiyeni web sayfası olarak oluştur, davetlilerinle paylaş!</h1>
        </div>
        <div className="p-5 pb-0">
          <img
            className="w-96"
            src="/kart.png"
            alt="banner"
          />
        </div>
      </div>
    </Link>
  );
}
