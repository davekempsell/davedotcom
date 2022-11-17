export function DistanceInput(distance, setDistance) {
  return (
    <div className="distance">
      <div className="label">
        Distance 
      </div>
      <div className="input-wrapper">
        <input type="number" value={distance} onInput={e => setDistance(e.target.value)}></input>
      </div>
    </div>
  )
}