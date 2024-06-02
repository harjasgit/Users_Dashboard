import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "SEVERITY",
          value: "50.5%",
          
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "PROTCOL",
          value: "35HZ",
          text: "TCP protocol is highly used"
          
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "EVENT TYPE",
          text: "Alert event type is most used",
        }}
      />
    </section>
  );
};

export default AreaCards;
