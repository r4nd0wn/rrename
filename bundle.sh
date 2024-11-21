bun build ./index.ts --outfile ./build/rrename-linux-x64 --compile --minify --sourcemap --target=bun-linux-x64;
bun build ./index.ts --outfile ./build/rrename-linux-arm64 --compile --minify --sourcemap --target=bun-linux-arm64;
bun build ./index.ts --outfile ./build/rrename-windows-x64 --compile --minify --sourcemap --target=bun-windows-x64;
bun build ./index.ts --outfile ./build/rrename-darwin-x64 --compile --minify --sourcemap --target=bun-darwin-x64;
bun build ./index.ts --outfile ./build/rrename-darwin-arm64 --compile --minify --sourcemap --target=bun-darwin-arm64;
bun build ./index.ts --outfile ./build/rrnename.js --target bun;
bun build ./index.ts --minify --outfile ./build/rrnename.min.js --target bun;
