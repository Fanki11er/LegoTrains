import { useParams } from "react-router-dom";
import Set722V1 from "../../../LegoSets/Set7722V1/Set722V1";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserSetsListFromDatabase } from "../../../firebase/readFromDbFunctions";
import { ExistingDataInfo } from "../../../Classes/PersistanceModule";
import { USER_SETS_LIST } from "../../../Api/queryKeys";
import { useEffect, useState } from "react";
import { createNewUserSet } from "../../../firebase/writeToDbFunctions";

const LegoSet = () => {
  const { id } = useParams();
  const [legoSetId, setLegoSetId] = useState("");

  const queryClient = useQueryClient();

  const {
    data: setsList,
    isLoading: isSetsListLoading,
    isError: isSetsListError,
    error: setsListError,
  } = useQuery<ExistingDataInfo[]>({
    queryKey: [USER_SETS_LIST],
    queryFn: () => getUserSetsListFromDatabase(),
    staleTime: Infinity,
  });

  const {
    mutate: createNewSet,
    isError: isMutationError,
    isPending: isMutating,
    error: mutationError,
  } = useMutation({
    onError: (err) => console.log(err.message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_SETS_LIST] });
    },
    mutationFn: () => createNewUserSet("Set_7722_V1"),
  });

  useEffect(() => {
    if (id && setsList) {
      const foundSet = setsList.find((set) => {
        return set === id;
      });
      if (foundSet) {
        setLegoSetId(foundSet);
      } else {
        createNewSet();
      }
    }
  }, [setsList, id, createNewSet]);

  return (
    //Todo To fix
    <>
      {isSetsListLoading && <div>ListLoading</div>}
      {isSetsListError && <div>{setsListError.message}</div>}
      {isMutating && <div>ListLoading</div>}
      {isMutationError && <div>{mutationError.message}</div>}

      {id === "Set_7722_V1" && legoSetId && <Set722V1 legoSetId={legoSetId} />}
    </>
  );
};

export default LegoSet;
