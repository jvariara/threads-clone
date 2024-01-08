"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

interface Props {
  routeType: string;
}

const SearchBar = ({ routeType }: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?search=${search}`);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    // cleanup timeout
    return () => clearTimeout(debounce);
  }, [search, routeType]);

  return (
    <div className="searchbar">
      <Image
        src="/assets/search.svg"
        alt="Search"
        width={20}
        height={20}
        className="object-contain"
      />
      <Input
        className="searchbar_input"
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType !== "search" ? "Search Communities" : "Search Users"
        }`}
      />
    </div>
  );
};

export default SearchBar;
