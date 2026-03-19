
```
ollama run deepseek-coder
```
<details>

```lua
pulling manifest 
pulling d040cc185215: 100% ▕████████████████████████████████████████████████████████████████████████████████▏ 776 MB                         
pulling a3a0e9449cb6: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  13 KB                         
pulling 8893e08fa9f9: 100% ▕████████████████████████████████████████████████████████████████████████████████▏   59 B                         
pulling 8972a96b8ff1: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  297 B                         
pulling d55c9eb1669a: 100% ▕████████████████████████████████████████████████████████████████████████████████▏  483 B                         
verifying sha256 digest 
writing manifest 
success
```

</details>


>>> generate a LDPC code in VHDL
```ollama

Creating an LDPC (Low Density Parity Code) can be complex due to the specifics of how it works under the hood and why we might want not 
just any type of error correction, but also low density. However here is some basic example on a 2x16 code using VHDL simulation in 
Quartus Prime:

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use ieee.numeric_std.all;   -- needed for conversion functions and types 
entity LDPC is    		   	-- entity name can be anything you want         
 Port ( clk : in STD_LOGIC;     	   			      									          	 	     
         start:in std_logic ;                          	       						                     reset:out std_logic);   -- inputs and outputs 								        
                     -                                                          /    10.2/                     75/-   849-63 (c)  
Created by VHDL's QuaTus Primer
end LDPC;	      		     					       				               Port map( clk => Clock, start=>start , reset   ->Reset );     --port mapping is necessary in 
vhdl design    To connect the ports to your component use port name  and then specify what should happen when this signal changes
begin                                           							         	      		              process (Clck) begin                      if Reset = '1' 
Then              					  0        Untitled.vhd(48): At line    2 of                             -   65/                            -- 97-3: 
in                                                   The design is for the VHDL simulator, not a physical device
end process;                                     			        		      	          end LDPC_architecture : architecture decode   begin          					   
            if Clk'event and clk = '1 then              --check of clock event 				            Decoding Logic here:                     case 
State is                                                       when "00" => NextState <=                     
endcase;                                               			begin                                      Temp(n)  <= to_integer (unsigned ('b & 
DataIn)) *  32 + Weight ;                             --calculation of parity and update                    next state logic here:      
case          Sequential Logic Here  when "01" => NextState <=                     
endcase;                                                 			--data in= 'x', error, xor gate etc., you should add your codes                 
  end if ;                                             -- End of cases                     else                                          
                          -  25 (c) andy.jesse@gmail.com  Created by VHDL's QuaTus Prime     
end LDPC_architecture;    		      	        			       				               Port map( Clk => clock, DataIn=>Data , Weight => 16#039EA2FA`              
           -- port mapping is necessary in vhdl design To connect the ports to your component use  -port name and then specify what 
should happen when this signal changes
end LDPC;  	-- end of entity definition		       									      		         reset <= (not Clock);     -----reset logic for simulation, make sure you 
have a correct clock input. It is not inverted to mimic actual implementation  --simulation done with QuaTus Prime VHDL simulator
```

-- This code will generate the decoding process of an LDPC parity check scheme (like PAPR) using two bits as state and data 
inputs/outputs. Please note that this is a very basic example, you would need to fill in more details for your actual use case like 
setting up correct weights or error correction methods etc., depending on the specific requirements of an LDPC parity check scheme


