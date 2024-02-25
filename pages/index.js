import Layout from "../components/Layout";

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
        <div className="pb-5">
          <p>
            Programcıların aynı zamanda iyi tasarımcılar olamayacağı yönündeki
            yaygın görüşe meydan okuyarak, ben kendi yolculuğumda bu iki
            disiplini birleştirme peşindeyim. Programlama bilgisiyle donanmış
            biri olarak, tasarım ve resim yapma yeteneğimi sürekli
            geliştiriyorum.
          </p>
          <p>
            Reklam ve yazılım sektörlerinde edindiğim çeşitli tecrübelerin
            ardından, şu anda özel bir eğitim kurumda bilgi ve iletişim
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
            takipçisiyim bu konular üzerinde konuşmak için müsait günlerime
            bakabilirsiniz.
          </p>
        </div>

        <div className="flex flex-col gap-8 border-t border-gray-900">
          <h1 className="font-bold text-xl mb-5 mt-10">Son Projeler</h1>
          <div className="flex flex-row gap-5">
            <div className="flex justify-center items-center border border-zinc-800 bg-zinc-900 w-2/6 rounded-xl">
              <h2 className="font-bold">IBAN List</h2>
            </div>
            <div className="w-full">
              <p>
                IBAN numaralarınıza aynı ekrandan ulaşıp, kolayca paylaşmanızı
                sağlayan bir uygulama.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex justify-center items-center border border-zinc-800 bg-zinc-900 w-2/6 rounded-xl">
              <h2 className="font-bold">TakvimApp</h2>
            </div>
            <div className="w-full">
              <p>
                Geleneksel Saatli Maarif Takvimi'nin ruhunu yeniden
                canlandırmaya çalışan ufakcık, tefecik bir uygulama.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex justify-center items-center border border-zinc-800 bg-zinc-900 w-2/6 rounded-xl">
              <h2 className="font-bold">MyDavet</h2>
            </div>
            <div className="w-full">
              <p>
                Yüz yüze veya online gerçekleşecek etkinlikleriniz için hızlı ve
                pratik bir şekilde web sayfanızı oluşturabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
