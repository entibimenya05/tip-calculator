export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}
function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill balue" />
    </div>
  );
}
function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option valu="0">Dissatisfied (%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Output() {
  return (
    <div>
      <h3>YOU Ppay x($A+$B tip)</h3>
    </div>
  );
}
function Reset() {
  return <button>Reset</button>;
}
