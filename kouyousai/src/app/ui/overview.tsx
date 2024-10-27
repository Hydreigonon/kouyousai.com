type overviewProps = {
  title: string
  description: string
}

export default function Overview(props: overviewProps) {
  const test = `Hello`;
  return(
    <>
    <div>
        <h2 className="text-6xl mx-auto  mt-8 text-center bold italic  -rotate-2">
          {props.title}
        </h2>
        <div className="mb-8 mx-auto w-[250px] border-b-[10px] border-orange-500"></div>
      </div>
      
      <p style={{whiteSpace: 'pre-line'}} className="text-2xl tracking-wide leading-10 text-center px-20">
        {props.description}
      </p>
    </>
  );
}

