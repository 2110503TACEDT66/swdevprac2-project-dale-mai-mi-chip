"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) vdoRef.current?.play();
    else vdoRef.current?.pause();
  }, [isPlaying, vdoRef.current]);

  return (
    <video className="w-[100%] " ref={vdoRef} src={vdoSrc} loop muted></video>
  );
}
