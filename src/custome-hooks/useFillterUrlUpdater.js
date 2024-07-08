"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function useFillterUrlUpdater() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRoom, setselectedRoom] = useState([]);
  const [normalizedPrice, setNormalizedPrice] = useState(0);
  const search = searchParams.get("search");

  const handleSliderChange = (e) => {
    const newNormalizedPrice = Math.round(parseFloat(e.target.value));
    setNormalizedPrice(newNormalizedPrice);
  };

  useEffect(() => {
    let updateUrlTimeout;

    const updateUrl = () => {
      const queryParams = new URLSearchParams(window.location.search);
      console.log("price query param---", queryParams);

      if (normalizedPrice) {
        queryParams.set("minPrice", normalizedPrice);
      } else {
        queryParams.delete("minPrice");
      }

      router.push(
        `${window.location.pathname}?${queryParams.toString()}`,
        undefined,
        { shallow: true }
      );
      console.log("price query param step-3---", queryParams);
    };

    updateUrlTimeout = setTimeout(updateUrl, 300);

    return () => {
      clearTimeout(updateUrlTimeout);
    };
  }, [normalizedPrice, router]);

  // other functions
  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());

    if (selectedRoom.length > 0) {
      queryParams.set("roomtype", selectedRoom.join(","));
    } else {
      queryParams.delete("roomtype");
    }

    // // Prevent infinite loop by checking if query parameters changed

    const newQueryString = queryParams.toString();
    if (newQueryString !== searchParams.toString()) {
      router.push(`${window.location.pathname}?${newQueryString}`, undefined, {
        shallow: true,
      });
    }
  }, [selectedRoom, searchParams, router]);

  const handleRoomChange = (room, isChecked) => {
    setselectedRoom((prevSelectedRooms) => {
      if (isChecked) {
        return [...prevSelectedRooms, room];
      } else {
        return prevSelectedRooms.filter(
          (selectedRoom) => selectedRoom !== room
        );
      }
    });
  };

  return {
    handleRoomChange,
    selectedRoom,
    setselectedRoom,
    handleSliderChange,
    normalizedPrice,
  };
}
