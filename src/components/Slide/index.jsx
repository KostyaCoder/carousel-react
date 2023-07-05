export default function Slide(props) {
  const { src } = props;

  return (
    <>
      <img src={src} />
      <h2>Title slide</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        quibusdam sapiente dignissimos explicabo cumque consectetur officia? Sed
        enim, nulla voluptatum hic, reiciendis repudiandae eaque excepturi at
        nesciunt voluptatem omnis suscipit.
      </p>
    </>
  );
}
