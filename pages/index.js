import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "temhaangelio",
  description:
    "Programcıların aynı zamanda iyi tasarımcılar olamayacağı yönündeki  yaygın görüşe meydan okuyarak, ben kendi yolculuğumda bu iki disiplini birleştirme peşindeyim. Programlama bilgisiyle donanmış biri olarak, tasarım ve resim yapma yeteneğimi sürekli geliştiriyorum.",
};

const Index = (props) => {
  return (
    <Layout
      pathname="/"
      siteTitle="temha angelio"
      siteDescription="Programcıların aynı zamanda iyi tasarımcılar olamayacağı yönündeki yaygın görüşe meydan okuyarak, ben kendi yolculuğumda bu iki disiplini birleştirme peşindeyim. Programlama bilgisiyle donanmış biri olarak, tasarım ve resim yapma yeteneğimi sürekli geliştiriyorum."
    >
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col gap-8 pb-12">
          <p>Merhaba,</p>
          <p>
            Programcıların aynı zamanda iyi tasarımcılar olamayacağı yönündeki
            yaygın görüşe meydan okuyarak, ben kendi yolculuğumda bu iki
            disiplini birleştirme peşindeyim. Programlama bilgisiyle donanmış
            biri olarak, tasarım ve resim yapma yeteneğimi sürekli
            geliştiriyorum.
          </p>
          <p>
            Reklam ve yazılım sektörlerinde edindiğim çeşitli tecrübelerin
            ardından, şu anda özel bir eğitim kurumunda bilgi ve iletişim
            teknolojileri alanında çalışmaktayım. Esas uzmanlık alanım
            programlama olsa da, yaratıcı süreçlere olan tutkum beni tasarım
            dünyasına çekiyor. Özellikle, tasarımlarımı oluştururken sadeliği
            benimsemiş durumdayım; çünkü sadeliğin, karmaşıklığın içinde bir tür
            zarafet ve netlik sunduğuna inanıyorum. Bence bu yaklaşım, hem
            estetik hem de fonksiyonel açıdan kullanıcı dostu çözümler
            üretmemizi sağlıyor.
          </p>
          <p>
            Teknoloji, tasarım ve çizim ile ilgili konuların sıkı bir
            takipçisiyim bu konular üzerinde konuşmak{" "}
            <Link href="mailto:temhaangelio@gmail.com" className="font-bold">
              temhaangelio@gmail.com
            </Link>{" "}
            adresini kullanabilirsiniz.
          </p>
          <p>Sevgiler.</p>
        </div>

        <div className="flex flex-col gap-12 border-t border-t dark:border-zinc-900">
          <h1 className="font-bold text-xl mb-5 mt-12">Son Projeler</h1>
          <Link
            href={"https://www.mydavet.com"}
            className="flex flex-row gap-5"
          >
            <Image
              alt="mydavet"
              src="/mydavet.png"
              className="rounded-xl w-28 h-28"
              width={125}
              height={125}
            />
            <div className="flex flex-col justify-between w-full">
              <h2 className="font-bold">Mydavet</h2>
              <p>
                Yüz yüze veya online gerçekleşecek etkinlikleriniz için hızlı ve
                pratik bir şekilde web sayfanızı oluşturabilirsiniz.
              </p>
              <span className="text-sm">UI, React, Firebase</span>
            </div>
          </Link>
          <Link
            href={"https://play.google.com/store/apps/details?id=com.ibanlist"}
            className="flex flex-row gap-5"
          >
            <Image
              alt="ibanlist"
              src="/ibanlist.png"
              className="rounded-xl w-28 h-28"
              width={125}
              height={125}
            />
            <div className="flex flex-col justify-between w-full">
              <h2 className="font-bold">IBAN List</h2>
              <p>
                IBAN numaralarınıza aynı ekrandan ulaşıp, kolayca paylaşmanızı
                sağlayan bir uygulama.
              </p>
              <span className="text-sm">UI, React Native</span>
            </div>
          </Link>
          <Link
            href={"https://play.google.com/store/apps/details?id=com.takvimapp"}
            className="flex flex-row gap-5"
          >
            <Image
              alt="takvimapp"
              src="/takvimapp.png"
              className="rounded-xl w-28 h-28"
              width={125}
              height={125}
            />
            <div className="flex flex-col justify-between w-full">
              <h2 className="font-bold">TakvimApp</h2>
              <p>
                Geleneksel Saatli Maarif Takvimi&apos;nin ruhunu yeniden
                canlandırmaya çalışan ufakcık, tefecik bir uygulama.
              </p>
              <span className="text-sm">UI, React Native</span>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
