import { useState } from "react";
import { Image, Button } from "@heroui/react";
import { Music, Music2, Music3, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { cn } from "@heroui/react";
import { allColors, Card } from "../customCard";

const songs = [
  { title: "Track 1", artist: "Artist 1" },
  { title: "Track 2", artist: "Artist 1" },
  { title: "Track 3", artist: "Artist 2" },
];

export function MusicWidget({ color = "warning" }: { color?: allColors }) {
  const [currentSong, setCurrentSong] = useState(0);
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    setPlay((prevValue) => !prevValue);
  };

  const handleNext = () => {
    setCurrentSong((prevValue) => (prevValue + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSong((prevValue) => (prevValue - 1 + songs.length) % songs.length);
  };

  const song = songs[currentSong];
  const { title, artist } = song;

  return (
    <Card
      color={color}
      className="grid size-full grid-cols-6 items-center justify-center gap-3 overflow-hidden p-2 md:grid-cols-12 md:gap-4"
    >
      <div className="relative col-span-6">
        <Image
          alt="Album cover"
          className="z-0 object-cover"
          isBlurred
          height={200}
          shadow="md"
          src="https://heroui.com/images/album-cover.png"
          width="100%"
        />
      </div>
      <div className="col-span-6 flex h-full flex-col justify-between md:col-span-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{title}</h3>
            <h1 className="font-medium text-foreground">{artist}</h1>
          </div>

          <div className={"flex h-fit w-12 flex-wrap justify-center gap-1"}>
            <Music2
              size={16}
              className={cn("text-white transition-all", {
                hidden: !play,
                "delay-500 duration-1000 animate-in zoom-in direction-alternate-reverse repeat-infinite":
                  play,
              })}
            />
            <Music3
              size={14}
              className={cn("text-white transition-all", {
                hidden: !play,
                "duration-1000 animate-in zoom-in direction-alternate-reverse repeat-infinite":
                  play,
              })}
            />
            <Music
              size={18}
              className={cn("text-white transition-all", {
                hidden: !play,
                "delay-300 duration-1000 animate-in zoom-in direction-alternate-reverse repeat-infinite":
                  play,
              })}
            />
          </div>
        </div>
        <div className="flex-center w-full">
          <Button isIconOnly radius="full" variant="light" onPress={handlePrev}>
            <SkipBack size={20} className="fill-white" />
          </Button>
          <Button isIconOnly radius="full" variant="light" onPress={handleClick}>
            {!play ? (
              <Play className="fill-white" size={25} />
            ) : (
              <Pause className="fill-white" size={25} />
            )}
          </Button>
          <Button isIconOnly radius="full" variant="light" onPress={handleNext}>
            <SkipForward size={25} className="fill-white" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
