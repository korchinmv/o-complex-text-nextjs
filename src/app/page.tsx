import Container from "@/components/Container";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between py-[13px] sm:py-[55px] px-[14px]'>
      <Title name='тестовое задание' css='mb-[97px] sm:mb-[105px]' />
      <Container>
        <h2>ho</h2>
      </Container>
    </main>
  );
}
