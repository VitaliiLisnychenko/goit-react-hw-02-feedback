export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <list>
        <item classname="">
          Good: <span>{good}</span>
        </item>
      </list>
      <list>
        <item classname="">
          Neutral: <span>{neutral}</span>
        </item>
      </list>
      <list>
        <item classname="">
          Bad: <span>{bad}</span>
        </item>
      </list>
      <list>
        <item classname="">
          Total: <span>{total}</span>
        </item>
      </list>
      <list>
        <item classname="">
          Positive faadback: <span>{positivePercentage}%</span>
        </item>
      </list>
    </>
  );
};
