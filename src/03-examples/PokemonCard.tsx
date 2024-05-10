import { useLayoutEffect, useRef, useState } from "react";

interface IPokemon {
  id: string;
  name: string;
  sprites: string[];
}

export const PokemonCard = ({ id, name, sprites = [] }: IPokemon) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = divRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [id]);

  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      {/* Images */}
      <div ref={divRef}>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </section>
  );
};
