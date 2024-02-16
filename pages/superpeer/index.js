import Layout from "../components/Layout";

const Index = (props) => {
  return (
    <Layout
      pathname="/"
      siteTitle="temha angelio"
      siteDescription="Programcıların aynı zamanda iyi tasarımcılar olamayacağı yönündeki yaygın görüşe meydan okuyarak, ben kendi yolculuğumda bu iki disiplini birleştirme peşindeyim. Programlama bilgisiyle donanmış biri olarak, tasarım ve resim yapma yeteneğimi sürekli geliştiriyorum."
    >
      <div className="flex flex-col gap-5">
        <p>
          Programcıların aynı zamanda iyi tasarımcılar olamayacağı yönündeki
          yaygın görüşe meydan okuyarak, ben kendi yolculuğumda bu iki disiplini
          birleştirme peşindeyim. Programlama bilgisiyle donanmış biri olarak,
          tasarım ve resim yapma yeteneğimi sürekli geliştiriyorum.
        </p>
        <p>
          Reklam ve yazılım sektörlerinde edindiğim çeşitli tecrübelerin
          ardından, şu anda özel bir eğitim kurumda bilgi ve iletişim
          teknolojileri alanında çalışmaktayım. Esas uzmanlık alanım programlama
          olsa da, yaratıcı süreçlere olan tutkum beni tasarım dünyasına
          çekiyor. Özellikle, tasarımlarımı oluştururken sadeliği benimsemiş
          durumdayım; çünkü sadeliğin, karmaşıklığın içinde bir tür zarafet ve
          netlik sunduğuna inanıyorum. Bence bu yaklaşım, hem estetik hem de
          fonksiyonel açıdan kullanıcı dostu çözümler üretmemizi sağlıyor.
        </p>
        <p>
          Teknoloji, tasarım ve çizim ile ilgili konuların sıkı bir takipçisiyim
          bu konular üzerinde konuşmak için müsait günlerime bakabilirsin.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
