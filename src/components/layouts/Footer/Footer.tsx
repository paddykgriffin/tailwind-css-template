import { Typography } from "@/components/common/Typography/Typography";
import { Container } from "../Container/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#333366] py-10 text-white dark:bg-black">
      <Container>
        <Typography variant="h3" align={'center'}>&copy; {year} All Rights Reserved</Typography>
      </Container>
    </footer>
  );
}
