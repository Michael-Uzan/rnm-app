import { useEffect, useState } from "react";
import { locationService } from "../services/locationService";
import { DEFAULT_LOCATION } from "../config/locationConfig";
import type { ILocation } from "../interfaces/ILocation";
import type { ILocationApi } from "../interfaces/ILocationApi";
import { parseLocationData } from "../utils/dataUtils";

type useFetchLocationProps = {
  locationId: number;
};

export const useFetchLocation = ({ locationId }: useFetchLocationProps) => {
  const [location, setLocation] = useState<ILocation>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadLocation = async () => {
      // if not origin location fallback to default location.
      if (locationId === -1) {
        setLocation(DEFAULT_LOCATION);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(false);
        const fetchedData = (await locationService.getById(
          locationId
        )) as ILocationApi;
        setLocation(parseLocationData(fetchedData));
      } catch (e) {
        setError(true);
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };

    loadLocation();
  }, [locationId]);

  return { location, loading, error };
};
