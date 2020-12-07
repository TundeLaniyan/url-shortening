import React from "react";

export interface HeaderProps {
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
  setResults: React.Dispatch<
    React.SetStateAction<{ longUrl: string; shortUrl: string }[]>
  >;
}
