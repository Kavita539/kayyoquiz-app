import "./loading.css";

const Loading = () => {
  return (
    <div className="flex-total-center loading-container">
        <div className="loader">
            <img className="responsive-img" src="/assets/Rolling-loading.svg" alt="loader" />
        </div>
    </div>
  );
};

export {
    Loading
};