const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary-foreground text-sm">
          © {new Date().getFullYear()} Janani Venture. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
