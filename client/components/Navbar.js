export default function Navbar(props) {
  const { signer, balance, address, refreshAddress } = props;

  return (
    <div>
      <nav>

        {/** Address balance */}
        <div>
          {balance && (
            <p>
              Balance: {balance} ETH
            </p>
          )}
        </div>

        {/** Signer address */}
        <div>
          {address && (
            <p>
              {address.slice(0, 6) + '...' + address.slice(36)}
            </p>
          )}
        </div>

        {/** Refresh signer address */}
        <button onClick={refreshAddress}>REFRESH</button>
      </nav>
    </div>
  );
}
