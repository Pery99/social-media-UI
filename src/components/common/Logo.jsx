const Logo = ({ light }) => {
  return (
    <div className="flex items-center">
      <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      <span className={`text-xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        ConnectMe
      </span>
    </div>
  )
}

export default Logo
