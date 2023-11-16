import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { songs } from './Song';
export const useSongs = routeLoader$(() => {
  return songs;
});

export const useGetServerTime = routeLoader$(() => {
  return new Date().toISOString();
});
export default component$(() => {
  const serverTime = useGetServerTime();
  const songs = useSongs();
  return (
    //
    <div>
      <div>{serverTime}</div>
      <ul>
        {songs.value.map((song) => {
          return (
            <li key={song.id}>
              <div>{song.id}</div>
              <div>{song.id}</div>
              <div>{song.name}</div>
              <div>{song.year}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
